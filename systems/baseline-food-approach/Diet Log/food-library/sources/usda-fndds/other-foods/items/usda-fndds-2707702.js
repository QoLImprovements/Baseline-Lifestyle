/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-melba-toast",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-melba-toast",
      "kind": "unit",
      "label": "1 melba toast"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-crostini",
      "kind": "unit",
      "label": "1 crostini"
    }
  ],
  "name": "Melba toast",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 76.6,
    "energy_kcal": 390.0,
    "fat_g": 3.2,
    "fibre_g": 6.3,
    "folate_ug": 124.0,
    "iron_mg": 3.7,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 196.0,
    "potassium_mg": 202.0,
    "protein_g": 12.1,
    "salt_g": 1.495,
    "sat_fat_g": 0.445,
    "sodium_mg": 598.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707702",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
