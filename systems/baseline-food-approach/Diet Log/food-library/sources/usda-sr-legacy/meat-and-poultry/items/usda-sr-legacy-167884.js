/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167884",
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
      "gramsPerUnit": 215.0,
      "key": "chop",
      "kind": "unit",
      "label": "chop"
    }
  ],
  "name": "Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, pan-fried",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.0,
    "energy_kcal": 1070.0,
    "fat_g": 16.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.84,
    "magnesium_mg": 20.0,
    "omega3_g": 0.119,
    "phosphorus_mg": 226.0,
    "potassium_mg": 318.0,
    "protein_g": 25.0,
    "salt_g": 0.2125,
    "sat_fat_g": 4.27,
    "sodium_mg": 85.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167884",
  "state": "Fried",
  "subcategory": "Pork Products",
  "tags": [
    "fried",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
