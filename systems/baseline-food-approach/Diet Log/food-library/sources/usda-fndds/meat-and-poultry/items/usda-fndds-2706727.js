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
  "id": "usda-fndds-2706727",
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
      "gramsPerUnit": 305.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Jambalaya with meat and rice",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.65,
    "energy_kcal": 161.0,
    "fat_g": 7.97,
    "fibre_g": 0.7,
    "folate_ug": 22.0,
    "iron_mg": 1.11,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 136.0,
    "potassium_mg": 240.0,
    "protein_g": 13.8,
    "salt_g": 0.9475,
    "sat_fat_g": 2.21,
    "sodium_mg": 379.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706727",
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
