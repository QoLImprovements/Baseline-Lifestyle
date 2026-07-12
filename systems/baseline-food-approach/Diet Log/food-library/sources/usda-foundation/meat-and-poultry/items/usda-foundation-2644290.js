/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Legumes and Legume Products",
  "id": "usda-foundation-2644290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Beans, kidney, light red, canned, sodium added, sugar added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 60.2,
    "carbs_g": 21.4,
    "energy_kcal": 127.0,
    "fat_g": 1.3,
    "fibre_g": 7.4,
    "folate_ug": 0.0,
    "iron_mg": 1.3,
    "magnesium_mg": 25.5,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.6,
    "potassium_mg": 209.0,
    "protein_g": 7.31,
    "salt_g": 0.395,
    "sat_fat_g": 0.0,
    "sodium_mg": 158.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644290",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
