/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706900",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Quarter Pounder with cheese (McDonalds)",
  "nutritionPerBasis": {
    "calcium_mg": 179.0,
    "carbs_g": 19.7,
    "energy_kcal": 269.0,
    "fat_g": 14.4,
    "fibre_g": 1.2,
    "folate_ug": 16.0,
    "iron_mg": 1.02,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 223.0,
    "protein_g": 15.2,
    "salt_g": 1.4775,
    "sat_fat_g": 7.03,
    "sodium_mg": 591.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706900",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
