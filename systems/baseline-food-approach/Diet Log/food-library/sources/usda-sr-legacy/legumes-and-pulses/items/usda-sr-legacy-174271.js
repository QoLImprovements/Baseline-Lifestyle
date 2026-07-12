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
  "id": "usda-sr-legacy-174271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 172.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 10.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Soybeans, mature cooked, boiled, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 8.36,
    "energy_kcal": 172.0,
    "fat_g": 8.97,
    "fibre_g": 6.0,
    "folate_ug": 54.0,
    "iron_mg": 5.14,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 515.0,
    "protein_g": 18.2,
    "salt_g": 0.0025,
    "sat_fat_g": 1.3,
    "sodium_mg": 1.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 19.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174271",
  "state": "Boiled",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "boiled",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
