/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Jams, syrups, toppings",
  "id": "usda-fndds-2710292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    }
  ],
  "name": "Caramel dip, regular",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 48.5,
    "energy_kcal": 295.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.01,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 36.0,
    "potassium_mg": 60.0,
    "protein_g": 1.16,
    "salt_g": 0.92,
    "sat_fat_g": 6.84,
    "sodium_mg": 368.0,
    "sugar_g": 48.5,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710292",
  "state": "Unspecified",
  "subcategory": "Jams, syrups, toppings",
  "tags": [
    "jams-syrups-toppings",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
