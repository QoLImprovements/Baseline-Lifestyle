/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "serving",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Vitasoy USA, Vitasoy Organic Creamy Original Soymilk",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 4.5,
    "energy_kcal": 44.0,
    "fat_g": 1.6,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 131.0,
    "protein_g": 2.9,
    "salt_g": 0.165,
    "sat_fat_g": 0.2,
    "sodium_mg": 66.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175212",
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
