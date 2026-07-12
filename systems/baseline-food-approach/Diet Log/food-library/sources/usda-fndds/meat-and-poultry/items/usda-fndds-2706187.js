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
  "id": "usda-fndds-2706187",
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
  "name": "Pepperoni, reduced sodium",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 1.18,
    "energy_kcal": 504.0,
    "fat_g": 46.3,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.33,
    "magnesium_mg": 18.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 158.0,
    "potassium_mg": 274.0,
    "protein_g": 19.2,
    "salt_g": 2.975,
    "sat_fat_g": 17.7,
    "sodium_mg": 1190.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706187",
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
