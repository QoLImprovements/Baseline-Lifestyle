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
  "id": "usda-sr-legacy-174893",
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
      "gramsPerUnit": 418.0,
      "key": "leg-hindshank-heel-on",
      "kind": "unit",
      "label": "leg hindshank, heel on"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, hindshank, heel on, bone-in, separable lean and fat, trimmed to 1/8\" fat, cooked, braised",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.0,
    "energy_kcal": 855.0,
    "fat_g": 9.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.0,
    "magnesium_mg": 19.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 150.0,
    "potassium_mg": 192.0,
    "protein_g": 29.5,
    "salt_g": 0.21,
    "sat_fat_g": 4.29,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174893",
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
