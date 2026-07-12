/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-167918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-3-oz",
      "kind": "unit",
      "label": "3 oz (3 oz)"
    },
    {
      "gramsPerUnit": 436.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pork, cured, ham -- water added, slice, bone-in, separable lean only, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.48,
    "energy_kcal": 548.0,
    "fat_g": 4.3,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.12,
    "magnesium_mg": 20.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 260.0,
    "potassium_mg": 289.0,
    "protein_g": 22.0,
    "salt_g": 3.425,
    "sat_fat_g": 1.44,
    "sodium_mg": 1370.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167918",
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
