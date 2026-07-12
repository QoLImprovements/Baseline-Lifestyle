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
  "id": "usda-sr-legacy-169166",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 436.0,
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
  "name": "Pork, cured, ham -- water added, slice, bone-in, separable lean and fat, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 1.54,
    "energy_kcal": 166.0,
    "fat_g": 8.73,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.07,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 251.0,
    "potassium_mg": 280.0,
    "protein_g": 20.8,
    "salt_g": 3.275,
    "sat_fat_g": 2.9,
    "sodium_mg": 1310.0,
    "sugar_g": 1.54,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169166",
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
