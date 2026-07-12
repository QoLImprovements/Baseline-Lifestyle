/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb",
      "kind": "unit",
      "label": "lb"
    }
  ],
  "name": "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 1160.0,
    "fat_g": 22.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.49,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 168.0,
    "potassium_mg": 136.0,
    "protein_g": 16.7,
    "salt_g": 0.0975,
    "sat_fat_g": 11.6,
    "sodium_mg": 39.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174336",
  "state": "Frozen",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "frozen",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
