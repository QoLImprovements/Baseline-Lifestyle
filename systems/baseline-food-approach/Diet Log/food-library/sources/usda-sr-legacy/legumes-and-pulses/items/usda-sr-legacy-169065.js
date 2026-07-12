/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-169065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, chili, barbecue, ranch style, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 16.9,
    "energy_kcal": 404.0,
    "fat_g": 1.0,
    "fibre_g": 4.2,
    "folate_ug": 26.0,
    "iron_mg": 1.86,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 154.0,
    "potassium_mg": 450.0,
    "protein_g": 5.0,
    "salt_g": 1.8125,
    "sat_fat_g": 0.145,
    "sodium_mg": 725.0,
    "sugar_g": 5.25,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169065",
  "state": "Cooked",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "cooked",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
