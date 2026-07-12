/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1266.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and rice with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.96,
    "energy_kcal": 178.0,
    "fat_g": 10.3,
    "fibre_g": 0.5,
    "folate_ug": 21.0,
    "iron_mg": 1.47,
    "magnesium_mg": 17.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 103.0,
    "potassium_mg": 181.0,
    "protein_g": 13.6,
    "salt_g": 0.6875,
    "sat_fat_g": 2.27,
    "sodium_mg": 275.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 18.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706497",
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
