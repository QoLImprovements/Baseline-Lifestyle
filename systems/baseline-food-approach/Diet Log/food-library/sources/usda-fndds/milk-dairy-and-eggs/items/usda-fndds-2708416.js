/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-cooked",
  "description": "Rice",
  "id": "usda-fndds-2708416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, cooked, with milk",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 25.0,
    "energy_kcal": 144.0,
    "fat_g": 2.31,
    "fibre_g": 0.3,
    "folate_ug": 42.0,
    "iron_mg": 1.03,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 130.0,
    "potassium_mg": 183.0,
    "protein_g": 5.13,
    "salt_g": 0.8925,
    "sat_fat_g": 1.29,
    "sodium_mg": 357.0,
    "sugar_g": 4.91,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708416",
  "state": "Cooked",
  "subcategory": "Rice",
  "tags": [
    "cooked",
    "milk-dairy-and-eggs",
    "rice"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
