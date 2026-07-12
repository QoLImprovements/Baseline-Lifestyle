/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "racc",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-2644282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Chickpeas, (garbanzo beans, bengal gram), dry",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 60.4,
    "energy_kcal": 383.0,
    "fat_g": 6.27,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.09,
    "magnesium_mg": 135.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 353.0,
    "potassium_mg": 1070.0,
    "protein_g": 21.3,
    "salt_g": 0.02195,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.78,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644282",
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
