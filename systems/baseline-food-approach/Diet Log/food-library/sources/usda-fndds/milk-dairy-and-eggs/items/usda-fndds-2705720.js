/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-slice",
  "description": "Cheese",
  "id": "usda-fndds-2705720",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 17.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cracker-size-slice",
      "kind": "unit",
      "label": "1 cracker-size slice"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Cheese, Monterey",
  "nutritionPerBasis": {
    "calcium_mg": 715.0,
    "carbs_g": 1.9,
    "energy_kcal": 392.0,
    "fat_g": 32.6,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 471.0,
    "potassium_mg": 83.0,
    "protein_g": 22.6,
    "salt_g": 1.655,
    "sat_fat_g": 19.2,
    "sodium_mg": 662.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 192.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705720",
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
