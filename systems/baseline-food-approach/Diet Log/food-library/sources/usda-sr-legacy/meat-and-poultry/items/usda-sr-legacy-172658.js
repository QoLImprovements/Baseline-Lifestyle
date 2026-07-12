/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 723.0,
      "key": "leg-bottom-boneless",
      "kind": "unit",
      "label": "leg bottom, boneless"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, bottom, boneless, separable lean and fat, trimmed to 1/8\" fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 918.0,
    "fat_g": 12.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.01,
    "magnesium_mg": 23.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 191.0,
    "potassium_mg": 279.0,
    "protein_g": 27.5,
    "salt_g": 0.1725,
    "sat_fat_g": 5.22,
    "sodium_mg": 69.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172658",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
