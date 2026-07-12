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
  "id": "usda-foundation-2644289",
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
  "name": "Beans, kidney, dark red, canned, sodium added, sugar added, drained and rinsed",
  "nutritionPerBasis": {
    "calcium_mg": 56.9,
    "carbs_g": 21.0,
    "energy_kcal": 127.0,
    "fat_g": 1.26,
    "fibre_g": 7.01,
    "folate_ug": 0.0,
    "iron_mg": 1.44,
    "magnesium_mg": 29.3,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 227.0,
    "protein_g": 7.8,
    "salt_g": 0.43,
    "sat_fat_g": 0.0,
    "sodium_mg": 172.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2644289",
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
