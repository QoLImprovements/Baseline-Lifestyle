/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-melted",
  "description": "Cheese",
  "id": "usda-fndds-2705712",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cracker-size-slice",
      "kind": "unit",
      "label": "1 cracker-size slice"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    },
    {
      "gramsPerUnit": 17.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Cheese, Colby",
  "nutritionPerBasis": {
    "calcium_mg": 685.0,
    "carbs_g": 2.57,
    "energy_kcal": 394.0,
    "fat_g": 32.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.76,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 457.0,
    "potassium_mg": 127.0,
    "protein_g": 23.8,
    "salt_g": 1.51,
    "sat_fat_g": 20.2,
    "sodium_mg": 604.0,
    "sugar_g": 0.52,
    "vitamin_a_ug": 264.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705712",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
