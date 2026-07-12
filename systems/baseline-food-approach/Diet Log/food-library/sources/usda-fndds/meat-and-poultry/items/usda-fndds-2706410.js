/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-hot-dog-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706410",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-hot-dog-with-sauce",
      "kind": "unit",
      "label": "1 hot dog with sauce"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Frankfurters or hot dogs with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 3.6,
    "energy_kcal": 223.0,
    "fat_g": 19.6,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 1.08,
    "magnesium_mg": 12.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 93.0,
    "potassium_mg": 316.0,
    "protein_g": 8.52,
    "salt_g": 2.1825,
    "sat_fat_g": 7.96,
    "sodium_mg": 873.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706410",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
