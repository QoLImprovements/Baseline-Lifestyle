/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-diced",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168223",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Pork, fresh, leg (ham), whole, separable lean and fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 1140.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.01,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 263.0,
    "potassium_mg": 352.0,
    "protein_g": 26.8,
    "salt_g": 0.15,
    "sat_fat_g": 6.47,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168223",
  "state": "Roasted",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
