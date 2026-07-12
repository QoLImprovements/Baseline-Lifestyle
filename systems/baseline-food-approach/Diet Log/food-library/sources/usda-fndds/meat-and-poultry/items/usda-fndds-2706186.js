/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-nfs",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "1-sausage-10-1-4-long-x-1-3-8-dia",
      "kind": "unit",
      "label": "1 sausage (10-1/4\" long x 1-3/8\" dia)"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Pepperoni, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.72,
    "energy_kcal": 378.0,
    "fat_g": 31.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.36,
    "magnesium_mg": 20.0,
    "omega3_g": 0.032,
    "phosphorus_mg": 192.0,
    "potassium_mg": 363.0,
    "protein_g": 21.1,
    "salt_g": 4.4,
    "sat_fat_g": 11.4,
    "sodium_mg": 1760.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706186",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
