/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken fillet sandwich, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 27.5,
    "energy_kcal": 281.0,
    "fat_g": 13.5,
    "fibre_g": 1.7,
    "folate_ug": 52.0,
    "iron_mg": 1.78,
    "magnesium_mg": 25.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 154.0,
    "potassium_mg": 209.0,
    "protein_g": 12.2,
    "salt_g": 1.4275,
    "sat_fat_g": 3.07,
    "sodium_mg": 571.0,
    "sugar_g": 3.07,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707000",
  "state": "Unspecified",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
