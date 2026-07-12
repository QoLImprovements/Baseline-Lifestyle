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
  "id": "usda-sr-legacy-168326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
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
  "name": "Pork, cured, ham and water product, slice, boneless, separable lean only, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 4.69,
    "energy_kcal": 516.0,
    "fat_g": 5.06,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.74,
    "magnesium_mg": 17.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 240.0,
    "potassium_mg": 272.0,
    "protein_g": 15.1,
    "salt_g": 3.475,
    "sat_fat_g": 1.53,
    "sodium_mg": 1390.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168326",
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
