/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item-5-7-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172071",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "item-5-7-oz",
      "kind": "unit",
      "label": "item 5.7 oz"
    }
  ],
  "name": "McDONALD'S, Sausage Biscuit with Egg",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 19.3,
    "energy_kcal": 311.0,
    "fat_g": 22.3,
    "fibre_g": 0.8,
    "folate_ug": 85.0,
    "iron_mg": 2.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 303.0,
    "potassium_mg": 165.0,
    "protein_g": 11.3,
    "salt_g": 1.66,
    "sat_fat_g": 8.63,
    "sodium_mg": 664.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172071",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
