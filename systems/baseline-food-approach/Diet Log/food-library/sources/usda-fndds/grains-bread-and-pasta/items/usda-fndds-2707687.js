/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-nfs",
  "description": "Turnovers and other grain-based items",
  "id": "usda-fndds-2707687",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "1-cup-dry-mix-prepared",
      "kind": "unit",
      "label": "1 cup, dry mix, prepared"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Bread stuffing",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 21.7,
    "energy_kcal": 177.0,
    "fat_g": 8.51,
    "fibre_g": 0.9,
    "folate_ug": 33.0,
    "iron_mg": 1.09,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 41.0,
    "potassium_mg": 72.0,
    "protein_g": 3.14,
    "salt_g": 1.1775,
    "sat_fat_g": 1.66,
    "sodium_mg": 471.0,
    "sugar_g": 2.35,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707687",
  "state": "Unspecified",
  "subcategory": "Turnovers and other grain-based items",
  "tags": [
    "grains-bread-and-pasta",
    "turnovers-and-other-grain-based-items",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
