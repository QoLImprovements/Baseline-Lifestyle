/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-serving-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-serving-3-oz",
      "kind": "unit",
      "label": "3 serving (3 oz)"
    },
    {
      "gramsPerUnit": 2970.0,
      "key": "roast-rump",
      "kind": "unit",
      "label": "roast rump"
    }
  ],
  "name": "Pork, cured, ham -- water added, rump, bone-in, separable lean only, heated, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.87,
    "energy_kcal": 121.0,
    "fat_g": 3.56,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.71,
    "magnesium_mg": 18.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 246.0,
    "potassium_mg": 250.0,
    "protein_g": 21.4,
    "salt_g": 2.875,
    "sat_fat_g": 1.25,
    "sodium_mg": 1150.0,
    "sugar_g": 0.84,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167915",
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
