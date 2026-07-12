/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Rice mixed dishes",
  "id": "usda-fndds-2709088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spanish rice with ground beef",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 14.8,
    "energy_kcal": 163.0,
    "fat_g": 6.91,
    "fibre_g": 0.8,
    "folate_ug": 29.0,
    "iron_mg": 1.56,
    "magnesium_mg": 14.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 87.0,
    "potassium_mg": 181.0,
    "protein_g": 9.68,
    "salt_g": 0.865,
    "sat_fat_g": 2.28,
    "sodium_mg": 346.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 8.4,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709088",
  "state": "Unspecified",
  "subcategory": "Rice mixed dishes",
  "tags": [
    "meat-and-poultry",
    "rice-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
