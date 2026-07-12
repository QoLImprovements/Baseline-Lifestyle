/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey salad with nuts and/or fruits",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 6.11,
    "energy_kcal": 235.0,
    "fat_g": 17.9,
    "fibre_g": 1.0,
    "folate_ug": 14.0,
    "iron_mg": 0.6,
    "magnesium_mg": 27.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 136.0,
    "potassium_mg": 237.0,
    "protein_g": 12.5,
    "salt_g": 0.9775,
    "sat_fat_g": 2.82,
    "sodium_mg": 391.0,
    "sugar_g": 4.26,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 38.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706800",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
