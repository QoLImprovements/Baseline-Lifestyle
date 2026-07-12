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
  "id": "usda-fndds-2706427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chili, white",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 9.68,
    "energy_kcal": 95.0,
    "fat_g": 1.91,
    "fibre_g": 2.4,
    "folate_ug": 30.0,
    "iron_mg": 1.5,
    "magnesium_mg": 29.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 95.0,
    "potassium_mg": 280.0,
    "protein_g": 9.92,
    "salt_g": 0.81,
    "sat_fat_g": 0.54,
    "sodium_mg": 324.0,
    "sugar_g": 0.97,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 4.6,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706427",
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
