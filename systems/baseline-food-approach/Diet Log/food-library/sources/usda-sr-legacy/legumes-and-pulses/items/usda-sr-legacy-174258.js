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
  "id": "usda-sr-legacy-174258",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Noodles, chinese, cellophane or long rice (mung beans), dehydrated",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 86.1,
    "energy_kcal": 351.0,
    "fat_g": 0.06,
    "fibre_g": 0.5,
    "folate_ug": 2.0,
    "iron_mg": 2.17,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 10.0,
    "protein_g": 0.16,
    "salt_g": 0.025,
    "sat_fat_g": 0.017,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174258",
  "state": "Dried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "dried",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
