/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-net-weight-5-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "package-net-weight-5-oz",
      "kind": "unit",
      "label": "package (net weight, 5 oz)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Turkey and gravy, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 4.61,
    "energy_kcal": 280.0,
    "fat_g": 2.63,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.93,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 61.0,
    "protein_g": 5.88,
    "salt_g": 1.385,
    "sat_fat_g": 0.85,
    "sodium_mg": 554.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171500",
  "state": "Frozen",
  "subcategory": "Poultry Products",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
