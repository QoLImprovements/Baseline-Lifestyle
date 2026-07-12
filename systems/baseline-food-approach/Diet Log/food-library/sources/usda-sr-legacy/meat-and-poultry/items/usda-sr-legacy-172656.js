/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, seam fat, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.55,
    "energy_kcal": 2320.0,
    "fat_g": 54.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.39,
    "magnesium_mg": 12.0,
    "omega3_g": 0.699,
    "phosphorus_mg": 112.0,
    "potassium_mg": 164.0,
    "protein_g": 13.8,
    "salt_g": 0.1325,
    "sat_fat_g": 28.6,
    "sodium_mg": 53.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172656",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
