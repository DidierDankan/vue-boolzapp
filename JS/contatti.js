// Elenco contatti
const app = new Vue( {
    el:'#app',
    data:{
        friends: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,// di default era true
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        //index reactivo(di ogni elemento(all'interno del oggetto)) per trovare e navigare da per tutto
        indexOfFriend:0,
        //variabile per i input della chat
        newText: '',
        //variabile per i input di riscerca
        newSearch:'',
    },
    
    methods:{
        //seleziona la chat presenti
        onSelectConversation(index) {
            this.indexOfFriend = index;
           
        },
        //send message to chat presenti
        newMessage() {

            const activeContact = this.friends[this.indexOfFriend].messages;

            //user message sent
            if(this.newText !== '') {
                activeContact.push({
                    date:dayjs().format('DD/MM/YYYY hh:mm:ss'),
                    message:this.newText,
                    status:'sent',
                })

                //clean input
                this.newText = '';

                //automatic response
                setTimeout(() =>{
                    if(this.newText == ''){
                        activeContact.push({
                            date:dayjs().format('DD/MM/YYYY hh:mm:ss'),
                            message:'Ok',
                            status:'received',
                        });
                    }
                },1500)
            }
        },
        //qui per filtragio del search
        onNewSearch() {
            //for each per looparci su ogni elemento(tutti datti di un elemento di friends)
            this.friends.forEach((element)=>{
                // qui se il element.name include il resultato di quello che ho scrito all'input allora la visibilita adventa true solo per quello elemento trovato, rendendo tutte due to lowercase(element.name e input.value) quando scrive nello input pure se è lowercase trova quelle che è uppercase nel markup
                if(element.name.toLowerCase().includes(this.newSearch.toLowerCase())){
                    element.visible = true;
                } else {
                    //pure si sono tutti true como default, se non li trova, gli cambia per false
                    element.visible = false;
                }
            });
            
        },

        //questa è una function che transforma a prima lettera in uppercase
            //  toTitleCase () {
            //      this.newSearch = this.newSearch.toLowerCase().split (' ');
            //      for (let i = 0; i < this.newSearch.length; i++) {
            //          this.newSearch[i] = this.newSearch[i].charAt(0).toUpperCase() + this.newSearch[i].slice(1);
            //     }
            //      return this.newSearch.join(' ');
            //  },
        
        // questo è un filter di vue che non ho capito bene
        // },
        // filters: {
        //     capitalize: function (newSearch) {
        //         if (!newSearch) return ''
        //         newSearch = newSearch.toString()
        //         return newSearch.charAt(0).toUpperCase() + newSearch.slice(1)
        //     }
     },
    
});
