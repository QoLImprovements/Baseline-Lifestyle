/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-muffin",
  "description": "Bagels and English muffins",
  "id": "usda-fndds-2707700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-muffin",
      "kind": "unit",
      "label": "1 muffin"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Muffin, English, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 190.0,
    "carbs_g": 42.1,
    "energy_kcal": 236.0,
    "fat_g": 3.31,
    "fibre_g": 3.3,
    "folate_ug": 90.0,
    "iron_mg": 3.81,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 110.0,
    "potassium_mg": 107.0,
    "protein_g": 9.59,
    "salt_g": 1.09,
    "sat_fat_g": 1.66,
    "sodium_mg": 436.0,
    "sugar_g": 3.37,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707700",
  "state": "Unspecified",
  "subcategory": "Bagels and English muffins",
  "tags": [
    "bagels-and-english-muffins",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
