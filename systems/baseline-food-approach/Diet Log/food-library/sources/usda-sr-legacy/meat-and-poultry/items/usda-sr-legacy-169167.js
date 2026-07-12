/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169167",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    }
  ],
  "name": "Pork, cured, ham -- water added, slice, boneless, separable lean and fat, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.72,
    "energy_kcal": 523.0,
    "fat_g": 5.05,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.85,
    "magnesium_mg": 21.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 281.0,
    "potassium_mg": 334.0,
    "protein_g": 18.6,
    "salt_g": 3.025,
    "sat_fat_g": 1.72,
    "sodium_mg": 1210.0,
    "sugar_g": 1.72,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169167",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
