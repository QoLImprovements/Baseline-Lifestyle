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
  "id": "usda-fndds-2706738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef and broccoli",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 5.09,
    "energy_kcal": 160.0,
    "fat_g": 10.6,
    "fibre_g": 1.3,
    "folate_ug": 34.0,
    "iron_mg": 1.23,
    "magnesium_mg": 24.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 118.0,
    "potassium_mg": 300.0,
    "protein_g": 10.4,
    "salt_g": 1.1,
    "sat_fat_g": 1.88,
    "sodium_mg": 440.0,
    "sugar_g": 1.23,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 1.8,
    "vitamin_k_ug": 61.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706738",
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
