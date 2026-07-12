/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "racc",
  "description": "Beef Products",
  "id": "usda-foundation-2646174",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Beef, chuck, roast, boneless, choice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.58,
    "carbs_g": 0.0,
    "energy_kcal": 232.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.06,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 281.0,
    "protein_g": 18.4,
    "salt_g": 0.121,
    "sat_fat_g": 6.34,
    "sodium_mg": 48.4,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2646174",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
