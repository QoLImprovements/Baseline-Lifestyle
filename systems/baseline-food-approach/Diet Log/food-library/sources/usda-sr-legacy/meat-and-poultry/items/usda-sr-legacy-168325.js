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
  "id": "usda-sr-legacy-168325",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 446.0,
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
  "name": "Pork, cured, ham and water product, slice, bone-in, separable lean only, heated, pan-broil",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.35,
    "energy_kcal": 122.0,
    "fat_g": 3.63,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.93,
    "magnesium_mg": 19.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 258.0,
    "potassium_mg": 289.0,
    "protein_g": 20.9,
    "salt_g": 3.1,
    "sat_fat_g": 1.22,
    "sodium_mg": 1240.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168325",
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
