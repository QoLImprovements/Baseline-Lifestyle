/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fun-snack-size",
  "description": "Candy containing chocolate",
  "id": "usda-fndds-2710344",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-fun-snack-size",
      "kind": "unit",
      "label": "1 fun/snack size"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-pouch-regular-size",
      "kind": "unit",
      "label": "1 pouch/regular size"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-large-king-size",
      "kind": "unit",
      "label": "1 large/king size"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-sharing-movie-theater-size",
      "kind": "unit",
      "label": "1 sharing/movie theater size"
    }
  ],
  "name": "Chocolate candy, cream filled",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 80.4,
    "energy_kcal": 366.0,
    "fat_g": 9.3,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 1.56,
    "magnesium_mg": 63.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 168.0,
    "protein_g": 2.2,
    "salt_g": 0.065,
    "sat_fat_g": 5.46,
    "sodium_mg": 26.0,
    "sugar_g": 71.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710344",
  "state": "Unspecified",
  "subcategory": "Candy containing chocolate",
  "tags": [
    "candy-containing-chocolate",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
