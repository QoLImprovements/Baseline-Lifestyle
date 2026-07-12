/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cracker",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708145",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crackers, woven wheat, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 68.6,
    "energy_kcal": 443.0,
    "fat_g": 17.2,
    "fibre_g": 10.5,
    "folate_ug": 28.0,
    "iron_mg": 3.08,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 297.0,
    "protein_g": 8.8,
    "salt_g": 0.465,
    "sat_fat_g": 3.39,
    "sodium_mg": 186.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 8.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708145",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
