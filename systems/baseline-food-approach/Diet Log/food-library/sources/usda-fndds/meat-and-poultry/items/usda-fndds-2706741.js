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
  "id": "usda-fndds-2706741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Hunan beef",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 7.29,
    "energy_kcal": 105.0,
    "fat_g": 5.3,
    "fibre_g": 1.5,
    "folate_ug": 45.0,
    "iron_mg": 1.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 76.0,
    "potassium_mg": 204.0,
    "protein_g": 7.08,
    "salt_g": 1.0225,
    "sat_fat_g": 0.978,
    "sodium_mg": 409.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 51.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706741",
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
