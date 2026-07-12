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
  "id": "usda-fndds-2706755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage with ham hocks",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 4.9,
    "energy_kcal": 75.0,
    "fat_g": 2.58,
    "fibre_g": 1.7,
    "folate_ug": 26.0,
    "iron_mg": 0.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 255.0,
    "protein_g": 7.75,
    "salt_g": 0.86,
    "sat_fat_g": 0.812,
    "sodium_mg": 344.0,
    "sugar_g": 2.69,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 23.8,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 41.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706755",
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
