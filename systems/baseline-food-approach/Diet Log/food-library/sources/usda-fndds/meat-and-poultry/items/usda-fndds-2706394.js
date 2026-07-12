/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Steak tartare",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.34,
    "energy_kcal": 216.0,
    "fat_g": 15.6,
    "fibre_g": 0.2,
    "folate_ug": 21.0,
    "iron_mg": 2.12,
    "magnesium_mg": 17.0,
    "omega3_g": 0.025,
    "phosphorus_mg": 184.0,
    "potassium_mg": 262.0,
    "protein_g": 17.4,
    "salt_g": 0.925,
    "sat_fat_g": 5.8,
    "sodium_mg": 370.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706394",
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
