/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-hindshank-heel-on",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-174887",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 530.0,
      "key": "leg-hindshank-heel-on",
      "kind": "unit",
      "label": "leg hindshank, heel on"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "4-oz",
      "kind": "unit",
      "label": "4 oz"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean only, trimmed to 1/8\" fat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 509.0,
    "fat_g": 3.53,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.58,
    "magnesium_mg": 21.0,
    "omega3_g": 0.125,
    "phosphorus_mg": 163.0,
    "potassium_mg": 227.0,
    "protein_g": 22.5,
    "salt_g": 0.2325,
    "sat_fat_g": 1.27,
    "sodium_mg": 93.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174887",
  "state": "Raw",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
