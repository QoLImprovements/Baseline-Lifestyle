/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Sausages",
  "id": "usda-fndds-2706204",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-sausage",
      "kind": "unit",
      "label": "1 sausage"
    }
  ],
  "name": "Pickled sausage",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.13,
    "energy_kcal": 314.0,
    "fat_g": 26.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.28,
    "magnesium_mg": 19.0,
    "omega3_g": 0.032,
    "phosphorus_mg": 144.0,
    "potassium_mg": 308.0,
    "protein_g": 18.1,
    "salt_g": 2.675,
    "sat_fat_g": 9.08,
    "sodium_mg": 1070.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706204",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "meat-and-poultry",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
