/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey and noodles with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.6,
    "energy_kcal": 157.0,
    "fat_g": 9.02,
    "fibre_g": 0.6,
    "folate_ug": 10.0,
    "iron_mg": 0.54,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 177.0,
    "protein_g": 11.6,
    "salt_g": 0.9775,
    "sat_fat_g": 1.49,
    "sodium_mg": 391.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 17.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706536",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
