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
  "id": "usda-sr-legacy-172460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Peanut butter, chunky, vitamin and mineral fortified",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 17.7,
    "energy_kcal": 2480.0,
    "fat_g": 51.5,
    "fibre_g": 5.7,
    "folate_ug": 313.0,
    "iron_mg": 17.5,
    "magnesium_mg": 370.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 316.0,
    "potassium_mg": 744.0,
    "protein_g": 26.1,
    "salt_g": 0.915,
    "sat_fat_g": 7.97,
    "sodium_mg": 366.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 1170.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 43.2,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172460",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
