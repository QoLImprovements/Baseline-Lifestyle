/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "drumstick",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "drumstick",
      "kind": "unit",
      "label": "drumstick"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Chicken, broiler, rotisserie, BBQ, drumstick, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.12,
    "energy_kcal": 206.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.02,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 279.0,
    "protein_g": 25.6,
    "salt_g": 0.98,
    "sat_fat_g": 2.86,
    "sodium_mg": 392.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171126",
  "state": "Unspecified",
  "subcategory": "Poultry Products",
  "tags": [
    "meat-and-poultry",
    "poultry-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
