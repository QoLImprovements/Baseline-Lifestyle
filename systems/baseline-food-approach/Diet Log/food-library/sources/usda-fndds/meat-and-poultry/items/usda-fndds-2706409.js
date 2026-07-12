/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-hot-dog-with-sauce",
      "kind": "unit",
      "label": "1 hot dog with sauce"
    }
  ],
  "name": "Chili hot dog, no bun",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 7.09,
    "energy_kcal": 202.0,
    "fat_g": 15.0,
    "fibre_g": 1.7,
    "folate_ug": 28.0,
    "iron_mg": 1.51,
    "magnesium_mg": 18.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 110.0,
    "potassium_mg": 299.0,
    "protein_g": 10.0,
    "salt_g": 1.4475,
    "sat_fat_g": 6.03,
    "sodium_mg": 579.0,
    "sugar_g": 1.35,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706409",
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
